import Head from 'next/head';
import { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={theme === 'light' ? styles.light : styles.dark}>
            <Head>
                <title>Unique Next.js Design</title>
                <meta name="description" content="Completely different design with Next.js" />
            </Head>
            <header className={styles.header}>
                <h1>Unique Next.js Design</h1>
                <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />
            </header>
            <main className={styles.main}>
                <h2>Explore a New Design</h2>
                <Card title="Interactive Card" description="This card demonstrates a different design." />
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 Unique Design. All rights reserved.</p>
            </footer>
        </div>
    );
}