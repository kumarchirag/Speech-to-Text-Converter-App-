import React, { useState } from 'react';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Homepage() {
    const [textInput, setTextInput] = useState();
    const [isCopied, setCopied] = useClipboard(textInput, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <div className="Homepage w-screen h-screen">
            <h1 className="text-4xl text-center pt-16 text-white">
                Speech to Text Converter App
            </h1>

            

            <h3 className='text-center pt-8  pb-10 text-white'>This App converts your speech to English text.</h3>

            <div className="mainBody">

                <div onClick={() => { setTextInput(transcript); }} className="main-content min-w-40 min-h-60 bg-white  max-w-xl border-solid shadow-xl rounded-xl mx-5 md:mx-auto text-black p-2">
                    {transcript}
                </div>
                <p className=' text-center text-white font-thin pt-1 '>*click on text space to copy.</p>
                <div className="buttons flex pt-10 justify-center items-baseline space-x-10">
                    <button className=' bg-cyan-500 text-white px-4 py-2 rounded-full' onClick={setCopied}>
                        {isCopied ? "Copied" : "Copy"}
                    </button>
                    <button className=' bg-cyan-500 text-white px-4 py-2 rounded-full' onClick={startListening}>Start</button>
                    <button className=' bg-cyan-500 text-white px-4 py-2 rounded-full' onClick={SpeechRecognition.stopListening}>Stop</button>
                </div>
            </div>


        </div>
    )
}

export default Homepage