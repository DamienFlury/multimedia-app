# Migration `20200615150600-add-processed-path`

This migration has been generated by Damien Flury at 6/15/2020, 3:06:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Image" ADD COLUMN "processedPath" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200604152640-init..20200615150600-add-processed-path
--- datamodel.dml
+++ datamodel.dml
@@ -2,16 +2,17 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Image {
-  id        Int      @default(autoincrement()) @id
-  createdAt DateTime @default(now())
-  path      String
+  id            Int      @default(autoincrement()) @id
+  createdAt     DateTime @default(now())
+  path          String
+  processedPath String
 }
```

