# Real Estate Mobile

This directory contains an Expo-based mobile version of the project for Android and iOS.

## What Is Included

- A self-contained Expo app under `mobile/`
- Touch-friendly screens for `Home`, `About`, `Services`, `Blog`, `Pricing`, and `Contact`
- Shared local image assets copied from the original web project
- Lightweight in-app navigation using horizontal screen pills instead of web routing

## Run The Mobile App

```bash
cd mobile
npm install
npm start
```

Then use:

- `a` in the Expo terminal to open Android
- `i` in the Expo terminal to open iOS
- Expo Go or a simulator/emulator to preview the app

## Available Scripts

- `npm start`
- `npm run android`
- `npm run ios`

## Notes

- The forms and action buttons are presentational right now, matching the current web project behavior.
- The mobile app is intentionally separate from the existing Create React App web build so both experiences can evolve independently.
