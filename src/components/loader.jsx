import '../assets/styles/custom-style.css'

function Loader() {
    return (
    <div className="max-w-3/4 w-full mx-auto py-[20px] flex items-center justify-center h-screen">
        <div class="loader-wrapper">
            <div class="loader"></div>
            <div class="letter-wrapper">
                <span class="loader-letter">A</span>
                <span class="loader-letter">r</span>
                <span class="loader-letter">a</span>
                <span class="loader-letter">t</span>
                <span class="loader-letter">h</span>
                <span class="loader-letter">i</span>
                <span class="loader-letter">A</span>
                <span class="loader-letter">S</span>
            </div>
        </div>
    </div>
    )
}

export default Loader