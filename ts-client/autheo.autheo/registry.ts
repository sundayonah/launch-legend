import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/autheo/autheo/genesis";
import { MsgUpdateParams } from "./types/autheo/autheo/tx";
import { QueryParamsResponse } from "./types/autheo/autheo/query";
import { MsgUpdateParamsResponse } from "./types/autheo/autheo/tx";
import { QueryParamsRequest } from "./types/autheo/autheo/query";
import { Params } from "./types/autheo/autheo/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/autheo.autheo.GenesisState", GenesisState],
    ["/autheo.autheo.MsgUpdateParams", MsgUpdateParams],
    ["/autheo.autheo.QueryParamsResponse", QueryParamsResponse],
    ["/autheo.autheo.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/autheo.autheo.QueryParamsRequest", QueryParamsRequest],
    ["/autheo.autheo.Params", Params],
    
];

export { msgTypes }