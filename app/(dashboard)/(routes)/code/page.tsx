"use client"
import { useRouter } from "next/navigation";

import * as z from "zod"
import { useForm } from "react-hook-form";
import { Code } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ChatCompletionRequestMessage } from "openai";
import ReactMarkdown from 'react-markdown'
import { formSchema } from "./constants";

import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";

import {toast} from "react-toastify"

const CodePage = () => {
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt
            }

            const newMessages = [...messages, userMessage]

            const response = await axios.post("/api/code", {
                messages: newMessages
            })

            setMessages((current) => [...current, userMessage, response.data])
        } catch (error) {
            toast.error('Something went wrong ! Try again later..', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        } finally {
            router.refresh()
        }
    }

    return (
        <div>
            <Heading
                title="Code Generation"
                description="Generate code using descriptive model"
                icon={Code}
                iconColor="text-green-700"
                bgColor="bg-green-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                            <FormField name="prompt" render={({ field }) =>
                                <FormItem className="col-span-12 lg:col-span-10 ">
                                    <FormControl className="m-0 p-0 ">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="GET request using fetch in Javascript"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            } />
                            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4 ">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {messages.length === 0 && !isLoading && (
                        <Empty label="No conversation has been started" />
                    )}
                    <div className="flex flex-col-reverse gap-y-4 mb-8">
                        {messages.map((message, idx) => {
                            return (
                                <div key={idx} className={cn("p-2 md:p-8 w-full flex items-start gap-x-2 md:gap-x-8 rounded-lg", message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}>
                                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                                    <p className="text-sm px-1 w-[90%] overflow-auto">
                                        <ReactMarkdown components={{
                                            pre: ({ node, ...props }) => (
                                                <div className="rounded-lg w-full overflow-auto bg-black/10 my-2 md:px-2">
                                                    <pre {...props} />
                                                </div>
                                            ),
                                            code: ({ node, ...props }) => (
                                                <code className="bg-black/10 rounded-lg px-1 w-full overflow-auto" {...props} />
                                            )
                                        }} className="text-sm overflow-hidden leading-7">
                                            {message.content || ""}
                                        </ReactMarkdown>
                                    </p>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodePage;