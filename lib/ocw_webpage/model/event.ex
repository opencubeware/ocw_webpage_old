defmodule OcwWebpage.Model.Event do
  defstruct([:name])

  @type t :: %__MODULE__{
          name: String.t()
        }

  @spec new(%{event_name: %{name: String.t()}, tournament: map()}) :: t()
  def new(%{event_name: %{name: event_name}, tournament: _tournament}) do
    struct(__MODULE__, %{name: event_name})
  end

  @spec to_map(t()) :: map()
  def to_map(struct), do: Map.from_struct(struct)
end
