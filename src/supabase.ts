import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mvhogymxacvfreodhzqr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aG9neW14YWN2ZnJlb2RoenFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzNTIxODIsImV4cCI6MTk3OTkyODE4Mn0.BKn8-eLS8Cz471iaJrwQ5di1B43Ssn0GhAsAiSdXsak"
);
