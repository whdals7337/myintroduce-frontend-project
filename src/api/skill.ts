import axios from 'axios';
import {Header} from './Header';

export async function getSkillsByMemberId(memberId: number) {
    const response = await axios.get<Header<Skill[]>>(`http://ec2-13-125-104-210.ap-northeast-2.compute.amazonaws.com/api/skill?memberId=${memberId}&size=300`);
    return response.data;
}

export type Skill = {
    skill_id:        number;
    skill_name:      string;
    file_url:       string;
    file_origin_name: string;
    skill_level:     number;
    level:          number;
    member_id:       number;
}