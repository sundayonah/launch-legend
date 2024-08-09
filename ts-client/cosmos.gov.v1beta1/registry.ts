import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryVotesRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryVotesResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryDepositsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { TextProposal } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { Proposal } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { TallyResult } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { QueryProposalRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryProposalResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryTallyResultRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { Vote } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { GenesisState } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/genesis";
import { QueryProposalsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryParamsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { MsgVote } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { MsgVoteWeightedResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { WeightedVoteOption } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { QueryParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { MsgDepositResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { MsgVoteResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { QueryDepositsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { MsgSubmitProposal } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { QueryDepositRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryDepositResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryProposalsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryVoteResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { DepositParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { TallyParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { Deposit } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposalResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/tx";
import { VotingParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/gov";
import { QueryVoteRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";
import { QueryTallyResultResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/gov/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.gov.v1beta1.QueryVotesRequest", QueryVotesRequest],
    ["/cosmos.gov.v1beta1.QueryVotesResponse", QueryVotesResponse],
    ["/cosmos.gov.v1beta1.QueryDepositsResponse", QueryDepositsResponse],
    ["/cosmos.gov.v1beta1.TextProposal", TextProposal],
    ["/cosmos.gov.v1beta1.Proposal", Proposal],
    ["/cosmos.gov.v1beta1.TallyResult", TallyResult],
    ["/cosmos.gov.v1beta1.QueryProposalRequest", QueryProposalRequest],
    ["/cosmos.gov.v1beta1.QueryProposalResponse", QueryProposalResponse],
    ["/cosmos.gov.v1beta1.QueryTallyResultRequest", QueryTallyResultRequest],
    ["/cosmos.gov.v1beta1.Vote", Vote],
    ["/cosmos.gov.v1beta1.GenesisState", GenesisState],
    ["/cosmos.gov.v1beta1.QueryProposalsRequest", QueryProposalsRequest],
    ["/cosmos.gov.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
    ["/cosmos.gov.v1beta1.MsgVoteWeightedResponse", MsgVoteWeightedResponse],
    ["/cosmos.gov.v1beta1.WeightedVoteOption", WeightedVoteOption],
    ["/cosmos.gov.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.gov.v1beta1.MsgDepositResponse", MsgDepositResponse],
    ["/cosmos.gov.v1beta1.MsgVoteResponse", MsgVoteResponse],
    ["/cosmos.gov.v1beta1.QueryDepositsRequest", QueryDepositsRequest],
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.QueryDepositRequest", QueryDepositRequest],
    ["/cosmos.gov.v1beta1.QueryDepositResponse", QueryDepositResponse],
    ["/cosmos.gov.v1beta1.QueryProposalsResponse", QueryProposalsResponse],
    ["/cosmos.gov.v1beta1.QueryVoteResponse", QueryVoteResponse],
    ["/cosmos.gov.v1beta1.DepositParams", DepositParams],
    ["/cosmos.gov.v1beta1.TallyParams", TallyParams],
    ["/cosmos.gov.v1beta1.Deposit", Deposit],
    ["/cosmos.gov.v1beta1.MsgSubmitProposalResponse", MsgSubmitProposalResponse],
    ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted],
    ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
    ["/cosmos.gov.v1beta1.VotingParams", VotingParams],
    ["/cosmos.gov.v1beta1.QueryVoteRequest", QueryVoteRequest],
    ["/cosmos.gov.v1beta1.QueryTallyResultResponse", QueryTallyResultResponse],
    
];

export { msgTypes }