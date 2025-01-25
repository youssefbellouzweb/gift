"use client"
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        greetOnLoad();
        const floatingTextInterval = setInterval(addFloatingText, 3000);
        const backgroundChangeInterval = setInterval(changeBackground, 5000);

        return () => {
            clearInterval(floatingTextInterval);
            clearInterval(backgroundChangeInterval);
        };
    }, []);

    const generateConfetti = () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    };

    const showSurprise = () => {
        alert('Jenny, you are truly one of a kind! Happy Birthday 🎉');
        generateConfetti();
    };

    const changeBackground = () => {
        const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a1c4fd', '#c2e9fb'];
        document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, #fad0c4)`;
    };

    const addFloatingText = () => {
        const text = document.createElement('div');
        text.innerText = '🎂 Happy Birthday! 🎂';
        text.style.position = 'absolute';
        text.style.top = Math.random() * 100 + 'vh';
        text.style.left = Math.random() * 100 + 'vw';
        text.style.fontSize = '2rem';
        text.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
        text.style.opacity = 0;
        text.style.transition = 'opacity 2s';
        document.body.appendChild(text);
        setTimeout(() => {
            text.style.opacity = 1;
            setTimeout(() => text.remove(), 3000);
        }, 100);
    };

    const greetOnLoad = () => {
        setTimeout(() => {
            alert('Hey Jenny! Wishing you the most amazing day! 🎉');
        }, 2000);
    };

    const surpriseMessages = () => {
        const messages = [
            'You are amazing!',
            'The world is brighter with you in it!',
            'Keep shining, Jenny!',
            'Wishing you all the happiness!',
            'Happy Birthday to an incredible friend!'
        ];
        alert(messages[Math.floor(Math.random() * messages.length)]);
    };

    return (
        <div className="container">
            <div className="heart"></div>
            <h1>Happy Birthday, Jenny!</h1>
            <h2>To a friend who lights up every room they enter.</h2>
            <p>
                Jenny, your kindness and laughter make the world a better place. I’m so grateful to have you as a friend.
                May this year bring you as much joy as you bring to everyone around you.
            </p>
            <button className="button" onClick={showSurprise}>Click for a Surprise</button>
            <div className="footer">Made with ❤️ for a very special friend</div>
        </div>
    );
}
