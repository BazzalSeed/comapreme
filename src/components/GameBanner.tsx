interface GameBannerProps {
  sub: string;
  title: string;
  /** Title font size (CSS length). Defaults to a responsive clamp. */
  titleSize?: string;
}

/** Ornate game-style title plaque with 龍 emblem end-caps. */
export function GameBanner({ sub, title, titleSize }: GameBannerProps) {
  return (
    <div className="banner">
      <span className="banner-boss left" aria-hidden>龍</span>
      <div className="banner-inner">
        <div className="banner-sub">{sub}</div>
        <div
          className="banner-title"
          style={{ fontSize: titleSize ?? "clamp(1.8rem, 7vw, 3.4rem)" }}
        >
          {title}
        </div>
      </div>
      <span className="banner-boss right" aria-hidden>龍</span>
    </div>
  );
}
