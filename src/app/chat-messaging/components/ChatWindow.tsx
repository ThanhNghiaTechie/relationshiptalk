'use client';
import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RoleBadge from '@/components/ui/RoleBadge';
import type { Conversation, Message } from '../data/mockConversations';

interface ChatWindowProps {
  conversation: Conversation;
  onBack: () => void;
}

export default function ChatWindow({ conversation, onBack }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>(conversation.messages);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setIsSending(true);
    const newMsg: Message = {
      id: `msg-new-${messages.length + 1}`,
      senderId: 'me',
      text: inputValue.trim(),
      time: 'Just now',
      isRead: false,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    // Backend integration point: POST /api/messages
    setTimeout(() => setIsSending(false), 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-border flex-shrink-0">
        {/* Back button (mobile) */}
        <button
          onClick={onBack}
          className="lg:hidden p-1.5 rounded-lg hover:bg-muted transition-all duration-150 text-muted-foreground"
        >
          <Icon name="ChevronLeftIcon" size={20} variant="outline" />
        </button>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
            <AppImage
              src={conversation.participant.avatar}
              alt={`${conversation.participant.name} chat avatar`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          {conversation.participant.isOnline && (
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-card rounded-full" />
          )}
        </div>

        {/* Name & status */}
        <div className="flex-1 min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate text-sm font-700 text-foreground">
              {conversation.participant.name}
            </span>
            <RoleBadge role={conversation.participant.role} />
          </div>
          <p className="text-xs text-muted-foreground">
            {conversation.participant.isOnline ? (
              <span className="text-green-600 font-500">Online now</span>
            ) : (
              `Last seen ${conversation.participant.lastSeen}`
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {conversation.participant.role === 'Expert' && (
            <button className="btn-outline hidden text-xs py-1.5 px-3 rounded-lg sm:block">
              Book Session
            </button>
          )}
          <button className="p-2 rounded-lg hover:bg-muted transition-all duration-150 text-muted-foreground">
            <Icon name="EllipsisVerticalIcon" size={18} variant="outline" />
          </button>
        </div>
      </div>

      {/* Expert info banner */}
      {conversation.participant.role === 'Expert' && (
        <div className="expert-gradient border-b border-border px-4 py-2.5 flex items-center gap-3">
          <Icon
            name="ShieldCheckIcon"
            size={16}
            variant="solid"
            className="text-purple-600 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-600 text-purple-700">
              Verified Expert · {conversation.participant.specialization}
            </p>
            <p className="text-xs text-purple-500">
              Responses within 2 hours · {conversation.participant.sessionRate}/session
            </p>
          </div>
          <Icon
            name="StarIcon"
            size={14}
            variant="solid"
            className="text-amber-400 flex-shrink-0"
          />
          <span className="text-xs font-700 text-foreground">
            {conversation.participant.rating}
          </span>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-4">
        {/* Date separator */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-500 px-2">Today</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {messages.map((msg, i) => {
          const isMe = msg.senderId === 'me';
          const showAvatar = !isMe && (i === 0 || messages[i - 1].senderId !== msg.senderId);

          return (
            <div
              key={`msg-${conversation.id}-${msg.id}`}
              className={`flex items-end gap-2 fade-in ${isMe ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar for received messages */}
              {!isMe && (
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden bg-muted flex-shrink-0 ${showAvatar ? 'opacity-100' : 'opacity-0'}`}
                >
                  <AppImage
                    src={conversation.participant.avatar}
                    alt={`${conversation.participant.name} message avatar`}
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className={`flex flex-col gap-0.5 max-w-[72%] ${isMe ? 'items-end' : 'items-start'}`}
              >
                {msg.image && (
                  <div className="w-48 h-36 rounded-xl overflow-hidden mb-1">
                    <AppImage
                      src={msg.image}
                      alt="Shared image in conversation"
                      width={192}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {msg.text && (
                  <div
                    className={`px-4 py-2.5 text-sm leading-relaxed ${isMe ? 'chat-bubble-sent' : 'chat-bubble-received'}`}
                  >
                    {msg.text}
                  </div>
                )}
                <div className={`flex items-center gap-1 px-1 ${isMe ? 'flex-row-reverse' : ''}`}>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                  {isMe && (
                    <Icon
                      name={msg.isRead ? 'CheckCircleIcon' : 'CheckIcon'}
                      size={12}
                      variant={msg.isRead ? 'solid' : 'outline'}
                      className={msg.isRead ? 'text-primary' : 'text-muted-foreground'}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {conversation.isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden bg-muted flex-shrink-0">
              <AppImage
                src={conversation.participant.avatar}
                alt="typing indicator avatar"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="chat-bubble-received px-4 py-3 flex items-center gap-1">
              <div className="typing-dot w-1.5 h-1.5 bg-muted-foreground rounded-full" />
              <div className="typing-dot w-1.5 h-1.5 bg-muted-foreground rounded-full" />
              <div className="typing-dot w-1.5 h-1.5 bg-muted-foreground rounded-full" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="flex-shrink-0 px-4 py-3 bg-card border-t border-border">
        <div className="flex items-end gap-2">
          <button className="p-2 rounded-xl hover:bg-muted transition-all duration-150 text-muted-foreground flex-shrink-0">
            <Icon name="PhotoIcon" size={20} variant="outline" />
          </button>
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Write a message..."
              className="w-full bg-input border border-border rounded-2xl px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none max-h-32 scrollbar-hide"
            />
            <button className="absolute right-2.5 bottom-2.5 text-muted-foreground hover:text-primary transition-all duration-150">
              <Icon name="FaceSmileIcon" size={18} variant="outline" />
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isSending}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground transition-all duration-150 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
          </button>
        </div>
      </div>
    </div>
  );
}
