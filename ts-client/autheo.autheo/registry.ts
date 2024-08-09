import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/autheo/autheo/params";
import { MsgUpdateParams } from "./types/autheo/autheo/tx";
import { MsgUpdateParamsResponse } from "./types/autheo/autheo/tx";
import { GenesisState } from "./types/autheo/autheo/genesis";
import { QueryParamsRequest } from "./types/autheo/autheo/query";
import { QueryParamsResponse } from "./types/autheo/autheo/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/autheo.autheo.Params", Params],
    ["/autheo.autheo.MsgUpdateParams", MsgUpdateParams],
    ["/autheo.autheo.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/autheo.autheo.GenesisState", GenesisState],
    ["/autheo.autheo.QueryParamsRequest", QueryParamsRequest],
    ["/autheo.autheo.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }