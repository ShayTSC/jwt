#!/bin/sh

openssl genrsa -out private.key 2048
openssl rsa -in private.key -outform PEM -pubout -out public.key

