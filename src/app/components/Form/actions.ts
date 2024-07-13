export type State = {
    avatar_url: string;
    bio: string;
    blog: string;
    company: string;
    created_at: string;
    email: string;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    hireable: boolean;
    html_url: string;
    id: number;
    location: string;
    login: string | undefined;
    name: string;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string;
    type: string;
    updated_at: string;
    url: string;
}


export const initialState = {
    avatar_url: '',
    bio: '',
    blog: '',
    company: '',
    created_at: '',
    email: '',
    events_url: '',
    followers: 0,
    followers_url: '',
    following: 0,
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    hireable: false,
    html_url: '',
    id: 0,
    location: '',
    login: '',
    name: '',
    node_id: '',
    organizations_url: '',
    public_gists: 0,
    public_repos: 0,
    received_events_url: '',
    repos_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    twitter_username: '',
    type: '',
    updated_at: '',
    url: '',
}

export async function getDadosGithub(prevState: State | string, dataUser: FormData): Promise<State | string> {
    const user = dataUser.get('user');
    console.log(user)
    if (!user) return 'Obrigatório preenchimento do campo!';

    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json() as State;

    if (!data.login) return 'Usuário Inválido!'
    console.log(data);
    return data;
}