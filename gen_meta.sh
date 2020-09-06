#!/bin/sh

#define the template.
cat  << EOF
((filename . "$1")
 (licensetext . "")
 (texwidth . 0.9)
)
EOF
