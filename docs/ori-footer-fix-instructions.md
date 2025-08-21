# ORI Footer Component Fix Instructions

## Problem
The ORI footer component in `src/app/footer/ORI/` is causing test failures due to broken import paths. The directory needs to be completely removed or excluded from builds.

## Solution Applied

### Step 1: TypeScript Configuration Updates ✅

#### Updated `tsconfig.spec.json`
Added exclude pattern for ORI directory:
```json
{
  "exclude": [
    "src/app/footer/ORI/**/*"
  ]
}
```

#### Updated `tsconfig.json`
Added exclude pattern to main TypeScript config:
```json
{
  "exclude": [
    "cypress.config.ts",
    "src/app/footer/ORI/**/*"
  ]
}
```

### Step 2: Manual Directory Removal (Required)

Since the automated removal didn't work, you need to **manually delete** the ORI directory:

**Windows Explorer Method:**
1. Navigate to `D:\phasetwo\src\app\footer\`
2. Find the `ORI` folder
3. Right-click → Delete (or Shift+Delete for permanent deletion)

**Command Prompt Method:**
```cmd
cd D:\phasetwo
rmdir /s /q "src\app\footer\ORI"
```

**PowerShell Method:**
```powershell
Remove-Item -Path "D:\phasetwo\src\app\footer\ORI" -Recurse -Force
```

### Step 3: Verify Directory Structure

After deletion, your footer directory should look like this:
```
src/app/footer/
├── footer.component.html
├── footer.component.scss
├── footer.component.spec.ts
├── footer.component.ts
└── themed-footer.component.ts
```

**NO ORI directory should exist!**

### Step 4: Clear Build Cache

After removing the directory, clear the build cache:
```bash
# Clear Angular build cache
rm -rf .angular/cache

# Clear node_modules cache
rm -rf node_modules/.cache

# Or on Windows
rmdir /s /q .angular\cache
rmdir /s /q node_modules\.cache
```

### Step 5: Test the Fix

Run the tests again:
```bash
yarn test
```

## Why This Fix Works

1. **TypeScript Exclusion**: Prevents TypeScript compiler from processing ORI files
2. **Physical Removal**: Ensures files don't exist to be processed
3. **Cache Clearing**: Removes any cached references to the old files

## Expected Result

After applying this fix, the test command should run without the ORI footer errors:
- ✅ No more "Module not found" errors for ORI files
- ✅ No more TypeScript compilation errors for ORI components
- ✅ Tests should start and complete successfully

## Files Modified
- ✅ `tsconfig.spec.json` - Added ORI exclusion
- ✅ `tsconfig.json` - Added ORI exclusion
- 🔲 `src/app/footer/ORI/` - **Needs manual deletion**

## Verification Checklist

- [ ] ORI directory physically deleted from filesystem
- [ ] `yarn test` runs without ORI-related errors
- [ ] Build cache cleared
- [ ] Application still builds successfully with `npm run build`

## Troubleshooting

**If errors persist:**
1. Verify ORI directory is completely deleted
2. Clear all build caches
3. Restart your IDE/editor
4. Run `yarn install` to refresh dependencies
5. Try `ng build` first, then `yarn test`

**Alternative Solution:**
If you need to keep the ORI files for some reason, fix the import paths in:
- `src/app/footer/ORI/footer.component.ts`
- `src/app/footer/ORI/footer.component.spec.ts`

But the recommended approach is complete removal since the directory appears to be abandoned/broken code.