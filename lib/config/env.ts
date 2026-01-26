import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_MAPBOX_TOKEN: z.string().min(1, 'NEXT_PUBLIC_MAPBOX_TOKEN is required'),
    NEXT_PUBLIC_API_BASE_URL: z.string().url().optional().default('/api'),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

// Validate process.env against schema
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
}

export const env = parsed.data;
