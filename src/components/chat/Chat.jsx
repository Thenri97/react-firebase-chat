import { useEffect, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";



export const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");


    useEffect(() => {
        console.log(text);

    }, [text])


    const handleEmoji = (e) => {
        setText((prev => prev + e.emoji));
        setOpen(false);
    };

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <img src="https://www.pexels.com/pt-br/foto/animal-animal-de-estimacao-pet-fazenda-4918102" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nres culpa earum expedita cum adipisci ipsa veniam nulla.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nres culpa earum expedita cum adipisci ipsa veniam nulla.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nres culpa earum expedita cum adipisci ipsa veniam nulla.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nres culpa earum expedita cum adipisci ipsa veniam nulla.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nres culpa earum expedita cum adipisci ipsa veniam nulla.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="emoji">
                    <img src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker
                            open={open}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}