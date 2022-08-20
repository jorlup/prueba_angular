import {createAction, props} from "@ngrx/store";
import { Registro } from "../../models/user.interface";

const TYPE = '[Auth]';

export const SignUp = createAction(`${TYPE} registro`, props<{params: Registro}>());