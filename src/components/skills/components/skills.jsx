import React from 'react';
import '../style/skills.less'
import {useGlobal} from "reactn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCheck} from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    const [ skills, setSkills ] = useGlobal('skills');
    let componentsSkills = null;
    if (skills !== null) {
        componentsSkills = skills.map((data, index) => {
            return(
                <div key={`skillItem${index}`} className="itemSkills">
                    <div className="itemSkillsColumn">

                        <span>
                            {data.name}
                        </span>
                    </div>
                    <div className="itemSkillsColumn">
                        <span>
                            {data.isLearned ? <FontAwesomeIcon icon={faCheck} size={'2x'} /> : null}
                        </span>

                    </div>
                </div>
            )
        })
    }
    return (
        <div className={'Skills'}>
            {componentsSkills}
        </div>
    );
};



export default Skills;
