import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ENDPOINT_URL } from "./tokens";
import { CreateGroupData, Group } from "../models/group.model";
import { LoginModel } from "../models/shared.model";
import { PlayerModel } from "../models/player.model";

@Injectable()
export class GroupService {
	private get endpoint(): string {
		return `${this.baseUrl}/Group/`;
	}
	constructor(@Inject(ENDPOINT_URL) private readonly baseUrl: string, private readonly httpClient: HttpClient) {}

	getUserGroup(userId: string): Observable<Group[]> {
		return this.httpClient.get<Group[]>(`${this.endpoint}GetByUserId/${userId}`);
	}

	getPlayersInGroup(groupId: string): Observable<PlayerModel[]> {
		return this.httpClient.get<PlayerModel[]>(`${this.endpoint}/GetPlayers/${groupId}`);
	}

	createGroup(group: Group, password: string): Observable<boolean> {
		const body: CreateGroupData = { group, password };
		return this.httpClient.post<boolean>(`${this.endpoint}/Add`, body);
	}

	joinGroup(groupId: string, username: string, password: string): Observable<boolean> {
		const body: LoginModel = { username, password };
		return this.httpClient.post<boolean>(`${this.baseUrl}/Join/${groupId}`, body);
	}

	leaveGroup(groupId: string, userId: string): Observable<boolean> {
		return this.httpClient.post<boolean>(`${this.baseUrl}/Leave/${groupId}`, {
			userId,
		});
	}

	updateGroup(group: Group, password: string): Observable<boolean> {
		const body: CreateGroupData = { group, password };
		return this.httpClient.put<boolean>(`${this.endpoint}/Update/${group.id}`, body);
	}

	deleteGroup(groupId: string, userId: string): Observable<boolean> {
		return this.httpClient.delete<boolean>(`${this.endpoint}/Delete/${userId}/${groupId}`);
	}
}
