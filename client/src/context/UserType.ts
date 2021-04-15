type Action = {
    type: string;
    payload: string;
  };

type State = { 
    theme: string,
    describe?: string,
};

type Dispatch = (action: Action) => void;
type UserProvideProps = { children: React.ReactNode };


export type {Action, State, Dispatch, UserProvideProps};