"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (

    <div className="left-section">
        <div className="ls-wrapper">
            <div className="ls-wrapper-top">
                <img src="/assets/images/h-logo.svg" className="main-logo" alt="logo"/>
                <a className="search-wrapper">
                    <i className="fas fa-search"></i>
                    <p>Search Anything</p>
                </a>
            </div>
            <div className="ls-wrapper-bottom">
                <p className="mm-text">Main Menu</p>
                <Link href="/" scroll={false} className={`single-side-menu ${pathname === "/" ? "active" : ""}`}>
                    <i className="fa-light fa-skull"></i>
                    <span>Home</span>
                </Link>
                <Link href="/blog" scroll={false} className={`single-side-menu ${pathname.startsWith("/blog") ? "active" : ""}`}>
                    <i className="fa-light fa-newspaper"></i>
                    <span>Blog</span>
                </Link>
                <a className="single-side-menu">
                    <i className="fa-light fa-list"></i>
                    <span>Genres</span>
                </a>
                <a className="single-side-menu">
                    <i className="fa-light fa-hashtag"></i>
                    <span>Social Wall</span>
                </a>
                <a className="single-side-menu">
                    <i className="fa-light fa-calendar-star"></i>
                    <span>Release Calender</span>
                </a>
                <a className="single-side-menu">
                    <i className="fa-light fa-bell"></i>
                    <span>Notifications</span>
                </a>
            </div>
        </div>
    </div>
  );
}