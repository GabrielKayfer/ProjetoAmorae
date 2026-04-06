sed -i 's/import React, { useState, useEffect }/import { useState, useEffect }/g' src/pages/Catalog.tsx
# Using grep and sed more carefully for 'pulse' removal
sed -i '/const pulse = keyframes`/,/`;/d' src/pages/Catalog.tsx
