-- SQL script to create the User and Note tables
-- in PostgreSQL based on the provided Prisma models

-- Create the User table
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "tg" VARCHAR(255) UNIQUE NOT NULL,
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create the Note table
CREATE TABLE "Note" (
  "id" SERIAL PRIMARY KEY,
  "date" INTEGER NOT NULL,
  "month" VARCHAR(255) NOT NULL,
  "year" INTEGER NOT NULL,
  "content" JSON NOT NULL,
  "parentId" INTEGER,
  "userId" INTEGER NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),

  FOREIGN KEY ("parentId") REFERENCES "Note"("id"),
  FOREIGN KEY ("userId") REFERENCES "User"("id")
);

-- Trigger to update updatedAt in User table
CREATE OR REPLACE FUNCTION update_user_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_updated_at
BEFORE UPDATE ON "User"
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION update_user_updated_at();

-- Trigger to update updatedAt in Note table
CREATE OR REPLACE FUNCTION update_note_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_note_updated_at
BEFORE UPDATE ON "Note"
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION update_note_updated_at();
