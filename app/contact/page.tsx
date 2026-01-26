'use client';

import React from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />

            <Section backgroundColor={colors.background.primary} className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-24">
                        <ScrollReveal variant="fadeUp" delay={0.2} text-center className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">给我们留言</h2>
                            <p className="text-lg text-gray-400 max-w-xl mx-auto font-light">
                                请填写以下表单，我们的专业团队将在24小时内与您联系，
                                为您提供量身定制的支持与解答。
                            </p>
                        </ScrollReveal>

                        <ScrollReveal variant="scaleIn" delay={0.4} amount={0.1}>
                            <ContactForm />
                        </ScrollReveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
