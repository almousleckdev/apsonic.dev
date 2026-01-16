import React from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactCategories } from '@/components/contact/ContactCategories';
import { ContactForm } from '@/components/contact/ContactForm';
import { OfficeLocations } from '@/components/contact/OfficeLocations';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { FAQ } from '@/components/service-page';
import { SERVICE_FAQ_ITEMS } from '@/lib/data/faq';

export const metadata = {
    title: '联系我们 - Apsonic',
    description: '联系我们。经销商咨询、技术支持及一般问题。',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            {/* <ContactCategories /> */}

            <Section backgroundColor={colors.background.primary} className="py-20">
                <div className="container mx-auto px-4">

                    {/* Section 1: Contact Form - Centered */}
                    <div className="max-w-3xl mx-auto mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">给我们留言</h2>
                            <p className="text-gray-400">
                                请填写以下表单，我们将把您的咨询转交给相关部门。
                            </p>
                        </div>
                        <ContactForm />
                    </div>

                    {/* Section 2: Offices & Coverage - Full Width */}
                    <div className="border-t border-white/5 pt-20">
                        <OfficeLocations />
                    </div>

                </div>
            </Section>

            {/* FAQ Section Reuse */}
            {/* <div className="border-t border-white/10">
                <FAQ items={SERVICE_FAQ_ITEMS.slice(0, 4)} />
            </div> */}

        </main>
    );
}
