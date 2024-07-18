import { State, StateRepo, StateUser } from "@/app/hooks/useProfile";

export const initialState = {
    user: {
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
    },
    repos: [{
        name: '',
        stargazes_count: 0,
        url: '',
    }]
}

export async function getDadosGithub(prevState: State | string, dataUser: FormData): Promise<State | string> {
    const user = dataUser.get('user');
    console.log(user)
    if (!user) return 'Obrigatório preenchimento do campo!';

    const responseUser = await fetch(`https://api.github.com/users/${user}`);
    const dataUserApi = await responseUser.json() as StateUser;

    if (!dataUserApi.login) return 'Usuário Inválido!'

    const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`);
    const dataRepos = await responseRepos.json() as StateRepo[];

    return {user: dataUserApi, repos: [...dataRepos]};
}