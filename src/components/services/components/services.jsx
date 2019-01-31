import React from 'react';

const Services = () => {
    return (
        <div className={'servicesContent'}>
            <div className="itemServices">
                <div className="title">
                    <h1>The Hero’s Journey</h1>
                    <p>
                        If facing a call to adventure, toiling through challenges, or working on the return, we’re the Mentor needed to face The Cave. While our work page sings tales of past adventures, our services outline the archetypes of a story that’s yet to be told.
                    </p>
                </div>

            </div>
            <div className="itemServices">
                <div className="title">
                    <h1>Data Management</h1>
                    <p>
                        G.I. Joe taught us that knowing is half the battle; in the theater of big data, storage and retrieval are the other half — especially on the web.
                    </p>
                </div>
                <div className="itemImage">
                    <div className="image">
                        <img src="https://i.stack.imgur.com/z436c.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
