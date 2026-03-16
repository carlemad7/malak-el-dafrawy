// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Koukiiii",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "I LOVE YOU",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {🍣, 🏎️, ❤️, 🍪,
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "You are mine and mine alone and you will never ever ever be shared // The big question!
            yesBtn: "Agree",                                             // Text for "Yes" button
            noBtn: "Disagree"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "dah kter awiiiii 🚀💝",              // Shows when they go past 1000%
        normal: "okay this is worryinggggg 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You are crazyyyyyy",
        message: "Hey kouki i know what we’re going through isn’t easy and that this is a rough time but i wanted to tell you how proud i am of youu. You are actually the strongest person i ever met. And you are able to go through shit that no one would ever be able to handle. You are so strong and your faith is even stronger, and i am so proud of you. And i want you to know that i am here for youu through everything and that i will never ever leave your side. I may not be able to do much but i try my best for you. I dont want you to feel that youre going through something alone 5als. Aw that you are not understood or listened to. Because as i am alive you will always have someone that is there for you, listens to you, understands, by3ksk. You are getting the full package. On a serious note, everytime i say i love you more, i dont mean i love you more than you love me, i mean i love you more than the bad days ahead of us, i love you more than any fight we ever have, i love you more than any rough time we’re going through, i love you more than any amount of distance keeping us apart, i love you more than any obstacle that comes between us, and i love you more than the odds that are stacked against me. I love you more than anything.",
        emojis: ""  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FEFAE0",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FAEDCD",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#D3FAC7",     // Button color (should stand out against the background)
        buttonHover: "#B7E4C7",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#F1FAEE"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://open.spotify.com/track/4STVcrJTZi0ik2y7R4SAHj?si=c4ebde2ce6204a41", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
