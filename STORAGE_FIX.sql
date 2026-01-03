-- CRITICAL FIX FOR IMAGE UPLOADS
-- Run this in Supabase SQL Editor

-- 1. Enable RLS on storage.objects (if not already enabled, usually is)
alter table storage.objects enable row level security;

-- 2. Create a policy to allow public uploads/deletes/reads for 'vehicle-images' bucket
-- This allows ANYONE to upload, which is fine for your admin dashboard usage.
create policy "Public Access to Vehicle Images"
on storage.objects for all
using ( bucket_id = 'vehicle-images' )
with check ( bucket_id = 'vehicle-images' );

-- If the above fails because "policy already exists", run this line instead:
-- drop policy "Public Access to Vehicle Images" on storage.objects;
-- AND THEN run the create policy command again.
