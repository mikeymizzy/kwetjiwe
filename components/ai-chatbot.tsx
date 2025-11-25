/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Kwetjiwe AI assistant. Ask me about our services, clients, or anything from the company profile.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isOpen])

  const hasApiConfig = useMemo(() => typeof window !== "undefined", [])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const newMessages = [...messages, { role: "user", content: trimmed }]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong")
      }

      const data = await response.json()
      setMessages([...newMessages, { role: "assistant", content: data.reply ?? "I couldn't find an answer." }])
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Unable to answer right now.")
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "I couldn't reach the AI service right now. Please try again later or contact us directly if it's urgent.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void handleSend()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-2px]"
      >
        <MessageCircle size={18} />
        <span className="font-semibold">Ask AI</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Kwetjiwe AI Assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-muted text-foreground text-sm">
                    <Loader2 className="animate-spin" size={16} />
                    Thinking...
                  </div>
                </div>
              )}
              {error && (
                <p className="text-xs text-red-600 text-center">
                  {error} {hasApiConfig ? "" : "Check the API key configuration."}
                </p>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="px-5 py-4 border-t border-border bg-muted/50">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, clients, funding support..."
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isLoading}
                  className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-70 transition flex items-center gap-2"
                >
                  <Send size={16} />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
