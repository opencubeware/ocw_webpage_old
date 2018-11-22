defmodule OcwWebpage.Model.Result do
  alias OcwWebpage.Model
  defstruct [:attempts, :competitor]

  def new(%{attempts: attempts, person: competitor}) do
    competitor = Model.Person.new(competitor)
    struct(__MODULE__, %{attempts: attempts, competitor: competitor})
  end

  def to_map(%{attempts: attempts, competitor: competitor}) do
    %{attempts: attempts, competitor: Model.Person.to_map(competitor)}
  end
end
