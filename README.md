# Remix React Three Example

This project shows how to use `react-three` with Remix. It uses `<PespectiveCamera>`
with `<OrbitalControls>`. Use your mouse to change the camera.

NOTE: For some reason, when importing components from `@react-three/*`, we get the
error: `Identifier 'React' has already been declared`. I have used `patch-package`
to remove the `import * as React from 'react'` in all the files that cause this
issue.

Everything appears to be working. Perhaps it's an `esbuild` issue.
