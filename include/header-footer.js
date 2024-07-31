document.getElementById("header").innerHTML = `
<div class="top-navbar flex flex-col sm:flex-row gap-y-2 justify-between items-center">
    <ul class="flex flex-col sm:flex-row gap-3 items-center">
        <li class="flex flex-row gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#000000"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
            </svg>
            <a class="text-sm font-medium" href="tel:+9653673294">9653673294</a>
        </li>
        <li class="flex flex-row gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#000000"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" />
            </svg>
            <a class="text-sm font-medium" href="mailto:prince.pv.14.2000@gmail.com">prince.pv.14.2000@gmail.com</a>
        </li>
    </ul>

    <div class="location">
        <p class="flex flex-row justify-between items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                height="18" viewBox="0 0 24 24">
                <path fill="#000000"
                    d="M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12" />
            </svg> <span class="capitalize text-sm font-medium">mankhurd</span></p>
    </div>
</div>
<div class="flex flex-row justify-between items-center py-3 xl:px-28 lg:px-0 lg:hidden">
    <div class="logo">
        <a href="index.html">
            <figure>
                <img src="img/logo.webp" alt="" class="w-32 h-auto">
            </figure>
        </a>
    </div>

    <button class="w-10 h-10 hamburger-btn">
        <img src="img/SolarHamburgerMenuOutline.svg" alt="" class="w-32 h-auto">
    </button>
</div>

<nav class="hidden flex-row justify-between items-center xl:px-28 lg:px-0 lg:flex" id="navbar">
    <ul class="flex flex-row gap-2 md:gap-1 items-center py-8">
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html">home</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html#about-us-section">about us</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html#courses-section">courses</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html#why-us-section">why us</a>
        </li>
    </ul>
    <div class="logo">
        <a href="index.html">
            <figure>
                <img src="img/logo.webp" alt="" class="w-32 h-auto">
            </figure>
        </a>
    </div>
    <ul class="flex flex-row gap-2 items-center py-8">
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="faculty.html">faculty</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html#testimonial-toppers-section">achievers</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="index.html#testimonial-review-section">testimonial</a>
        </li>
        <li
            class="relative px-[10px] py-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-44 after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
            <a class="text-base font-semibold uppercase" href="contact-us.html">contact us</a>
        </li>
    </ul>
</nav>

<div class="mobile-menu fixed left-0 top-0 w-[16rem] h-screen bg-white border-r z-[9999] -translate-x-full">
            <div class="logo flex items-center justify-center">
                <a href="index.html">
                    <figure class="w-full">
                        <img src="img/logo.webp" alt="Atharva Academy" class="w-32 h-auto">
                    </figure>
                </a>
            </div>
            <nav class=" justify-between items-center" id="navbar">
                <ul class="flex flex-col gap-y-4 items-center pt-12 px-4">
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block" href="index.html">home</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block" href="index.html#about-us-section">about
                            us</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block" href="index.html#why-us-section">why
                            us</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block"
                            href="index.html#courses-section">courses</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block"
                            href="faculty.html">faculty</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block"
                            href="index.html#testimonial-review-section">testimonial</a>
                    </li>
                    <li
                        class="relative px-[10px] py-1 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-slate-700 hover:after:h-[2.5px] after:transition-all">
                        <a class="text-base font-semibold uppercase text-center w-full block" href="contact-us.html">contact
                            us</a>
                    </li>
                </ul>
            </nav>
        </div>
`;
