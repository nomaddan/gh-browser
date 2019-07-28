import { HttpService } from 'common/services/HttpService';
import { API_URL, pagination, reposCount } from 'common/config/constants';

import { UserData, UserDetailsData, UserRepoData } from './models/userModels';
import { SearchUsersResponse } from './models/userRequestModels';

export class UserService {
    constructor(private readonly httpService: HttpService) {}

    public getUsers() {
        return this.httpService.get<UserData[]>(`${API_URL}/users?per_page=${pagination.size}`);
    }

    public getUserDetails(login: string) {
        return this.httpService.get<UserDetailsData>(`${API_URL}/users/${login}`);
    }

    public searchUsers(searchTerm?: string) {
        const searchParam = searchTerm ? `&q=${searchTerm}` : '';

        return this.httpService.get<SearchUsersResponse>(
            `${API_URL}/search/users?per_page=${pagination.size}${searchParam}`
        );
    }

    public getUserRepos(login: string) {
        return this.httpService.get<UserRepoData[]>(
            `${API_URL}/users/${login}/repos?per_page=${reposCount}`
        );
    }
}
