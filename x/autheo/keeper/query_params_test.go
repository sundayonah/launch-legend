package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "autheo/testutil/keeper"
	"autheo/x/autheo/types"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := keepertest.AutheoKeeper(t)
	params := types.DefaultParams()
	require.NoError(t, keeper.SetParams(ctx, params))

	response, err := keeper.Params(ctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
