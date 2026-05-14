# Security & privacy

This page summarises the security and privacy controls built into the app. For the full legal text, see the [Privacy Notice](../legal/privacy.md).

## What the app protects

- **Your sign-in session** is encrypted at rest on your device, in the platform secure enclave (iOS Keychain or the Android Keystore-backed `EncryptedSharedPreferences`).
- **Your report data** is fetched from Panthera's servers each time the app needs to display it; it is not stored long-term on your device beyond what is required for the current screen.
- **Biometric unlock** gates the app on resume — if someone else picks up your phone while the app is in the background, they cannot see your reports without your Face ID, Touch ID or fingerprint.

!!! example "placeholder"
    📷 Replace with a screenshot of the biometric-gate screen that appears on app resume.
    Suggested file: `assets/user-guide/biometric-gate.png`

## What we collect

In plain English, the app collects:

- The **email address** you use to sign in, and basic sign-in metadata.
- Your **name and the client accounts** Panthera has granted you access to.
- **Crash reports**, automatically scrubbed of emails, tokens and identifiers before they leave your device.

We do **not** collect: advertising identifiers, your location, your contacts, photos, microphone or camera data. The app contains no third-party advertising or analytics SDKs.

The [Privacy Notice](../legal/privacy.md) describes this in full.

## Where your data goes

The app talks to a small number of services on Panthera's behalf:

| Service | What it does | Region |
| ------- | ------------ | ------ |
| Supabase | Authentication, database, encrypted file storage | London (eu-west-2) |
| Sentry | Crash reports (PII-scrubbed) | EU (Frankfurt) |

The list of sub-processors is also disclosed in section 5 of the [Privacy Notice](../legal/privacy.md).

## Your rights

You may at any time:

- Ask what personal data Panthera holds about you.
- Ask Panthera to correct inaccurate data.
- Delete your account — see [Managing your account](account-management.md) for the in-app path or the [Delete your account](../legal/delete-account.md) web page.
- Lodge a complaint with your local supervisory authority. The Privacy Notice lists the relevant regulators for Singapore, the UK and Canada.

Requests of any of the above should be emailed to [pantherainsight@gmail.com](mailto:pantherainsight@gmail.com).

## If you suspect unauthorised access

If you think someone else may have accessed your account — for example, you see sign-in activity you did not initiate, or your email inbox has been compromised — please:

1. **Sign out everywhere** (Settings → Security → Sign out everywhere).
2. If you have set a password, **change it** immediately.
3. Email [pantherainsight@gmail.com](mailto:pantherainsight@gmail.com) so we can review the account activity from our side.
