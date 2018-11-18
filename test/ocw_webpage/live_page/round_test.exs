defmodule OcwWebpage.LivePage.RoundTest do
  use OcwWebpage.DataCase, async: true

  alias OcwWebpage.LivePage.Round

  describe "name/1" do
    test "displays name of related round_name" do
      round_name = build(:round_name, name: "TestName")
      round = build(:round, round_name: round_name)
      assert Round.name(round) == {:ok, "TestName"}
    end

    test "displays error message when round_name is not definned" do
      insert(:round, round_name: nil)
      [round] = Repo.all(Round)

      assert Round.name(round) == {:error, :round_does_not_have_name}
    end

    test "displays error message when round_name not preloaded" do
      round_name = build(:round_name, name: "TestName")
      insert(:round, round_name: round_name)
      [round] = Repo.all(Round)

      assert Round.name(round) == {:error, :round_name_not_preloaded}
    end
  end
end
