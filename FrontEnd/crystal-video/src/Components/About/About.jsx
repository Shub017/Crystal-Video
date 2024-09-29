
import styles from './About.module.css'

export default function About(){

    return(
        <>
        <span class={styles.backGround}>
        
        <h1 class={`${styles.heading} ${styles.underLineText} ${styles.paragraphSpacing}`}>ABOUT</h1>
        <h2 class={styles.textCenter}>
            Welcome to Crystal Video PhotoGraphy, where we turn your 
            special moments into timeless memories. We are a passionate 
            team of professional wedding photographers dedicated to 
            capturing the beauty, emotion, and joy of your big day.
        </h2>

        <br />
        <h2 class={`${styles.textCenter} ${styles.underLineText} ${styles.heading} ${styles.paragraphSpacing}`}>OUR STORY</h2>
        <p class={`${styles.textCenter} ${styles.paragraphSpacing}`}>Founded in [Year], 
            [Your Photography Studio Name] was born out of 
            a love for storytelling through the lens. Over the years, 
            we have had the honor of capturing countless weddings, 
            each unique and filled with its own special moments. 
            Our mission is to provide you with stunning, high-quality 
            photographs that you will cherish for a lifetime.
        </p>
        
        <h1 class={`${styles.heading} ${styles.underLineText} ${styles.paragraphSpacing}`} >OUR APPROACH</h1>
        <h2 class={`${styles.textCenter} ${styles.paragraphSpacing}`}>We believe that every wedding is a 
            unique story waiting to be told.
        Our approach combines various photography styles to ensure a 
        comprehensive and beautiful representation of your day:
        </h2> 
        
        
        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Traditional/Classical Photography: 
            Perfectly posed shots that highlight the important moments and 
            people in your life.
        </h3>
        
        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Photojournalistic/Candid Photography: Capturing the spontaneous, 
            genuine emotions and interactions as they unfold.
        </h3>

        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Contemporary/Fine Art Photography: Artistic and creative shots 
            that bring a modern and unique touch to your wedding album.
        </h3>

        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Drone/Aerial Photography: Stunning aerial views of your venue 
            and the surrounding landscape.
        </h3>

        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Black and White Photography: Timeless and elegant images that 
            focus on the contrast and emotion of the moment.
        </h3>

        
        <h1 class={`${styles.heading} ${styles.underLineText} ${styles.paragraphSpacing}`} >
            Why Choose Us?
        </h1>

        <h3 class={`${styles.typesOfPhotography} ${styles.paragraphSpacing}`}>
            Experience and Expertise: With years of experience and a portfolio of diverse weddings, we know how to capture every moment perfectly.
            Personalized Service: We work closely with you to understand your vision and ensure that your wedding day is captured exactly how you imagined.
            High-Quality Equipment: We use the latest cameras, lenses, and editing software to deliver high-resolution, beautifully edited photos.
            Professional and Friendly Team: Our team is not only skilled but also passionate about making your wedding day as stress-free and enjoyable as possible.
            Meet the Team
            Our talented team of photographers and editors are here to provide you with exceptional service and stunning photography. Meet our lead photographer, [Photographer's Name], who has a keen eye for detail and a passion for capturing life's most beautiful moments.

            Let's Connect
            We would love to be a part of your special day. Contact us today to discuss your wedding photography needs and how we can make your memories last a lifetime.
        </h3>
        </span>
        </>
    )
}