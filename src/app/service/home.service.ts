import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
	private apiEndPoint = "http://127.0.0.1:10010/"
	constructor(
		private http: Http
	) { }

	protected getHeaders() {
		let headers = new Headers({});
		let options = new RequestOptions({ headers: headers });
		return options;
	}

	getStates(): Observable<any> {
		return this.http.get(this.apiEndPoint + "states", this.getHeaders())
			.pipe(map((res: Response) => res.json()));
	}

	getStateData(stateId): Observable<any> {
		return this.http.get(this.apiEndPoint + "state/" + stateId, this.getHeaders())
			.pipe(map((res: Response) => res.json()));
	}
}
