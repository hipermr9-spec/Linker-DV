import { useEffect } from "react";
import channelImage from "../../src/assets/channels4_profile.jpg";
import short1Thumb from "../../src/assets/short-1.png";

const CHANNEL_URL = "https://www.youtube.com/@devtoper";

const VIDEOS = [
  { title: "فيديو صغير وقتها كنت مريض.", url: "https://www.youtube.com/watch?v=HyTutJDcexk" },
  { title: "تحديد محتوى القناة واخترتوا جيمنج مع تطوير العاب.", url: "https://www.youtube.com/watch?v=RmWy4e3msOY&t=5s" },
  { title: "لعبت لعبة جديدة وقتها.", url: "https://www.youtube.com/watch?v=WBAHYHtq6rM&t=8s" },
  { title: "جربت بها مارفل رايفلز لأول مرة في قناة.", url: "https://www.youtube.com/watch?v=Dh0jcbQyIJc&t=35s" },
  { title: "تشغيل GTA 6 على كمبيوتر قديم وضعيف جدا!", url: "https://www.youtube.com/watch?v=nJ7kEOS3fRk" },
];

const SHORTS = [
  { title: "شورت حماسي لفيديو تشغيل GTA 6.", url: "https://www.youtube.com/shorts/KW3mw4VuVQs", thumbnail: short1Thumb },
];

export default function Welcome() {
  useEffect(() => {
    document.title = "Welcome To Linker DV !";
  }, []);

  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <img src={channelImage} alt="Dev Toper" className="channel-photo" />
        <p className="eyebrow">العاب و المزيد</p>
        <h1 className="channel-name">Dev Toper</h1>
        <p className="channel-bio">العاب راجع استمتع ولا تتوقف هناك الكثير.</p>
        <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="channel-cta">
          مشاهدة في يوتيوب
        </a>
      </header>

      <main className="video-list">
        <p className="eyebrow">اخر فيديوهات</p>
        <ul>
          {VIDEOS.map((video) => (
            <li key={video.url}>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-row">
                <span className="video-title">{video.title}</span>
                <span className="video-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <section className="shorts-list">
        <p className="eyebrow">شورتس</p>
        <div className="shorts-track">
          {SHORTS.map((short) => (
            <a key={short.url} href={short.url} target="_blank" rel="noopener noreferrer" className="short-card">
              <div className="short-thumb-wrapper">
                <img src={short.thumbnail} alt={short.title} className="short-thumb" />
                <span className="short-badge-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <rect x="7" y="3" width="10" height="18" rx="3" stroke="white" strokeWidth="1.6" />
                    <path d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z" fill="white" />
                  </svg>
                </span>
                <h3 className="short-title-text">{short.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="welcome-footer">
        <p>Linker DV From Dev Toper © 2026.</p>
      </footer>
    </div>
  );
}