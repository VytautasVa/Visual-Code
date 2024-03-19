import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, ()=> setShowContent(false));

    return (
        <div>
            {showContent ? (
                <div ref={ref}>
                    <h1>Random content</h1>
                    <p>
                        Please click outside
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show content</button>
            )}
        </div>
    );
}
