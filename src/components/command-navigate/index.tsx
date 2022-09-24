import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import navigateCommands from './navigate-commands.json';

const CommandNavigate = (props: any) => {
    const { command } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const findPage = navigateCommands.find((obj) => obj.possibleCommands.includes(command));
        if(findPage) navigate(findPage.page);
    }, [command]);

    return null;
}

const mapStateToProps = (state: any) => ({
    command: state.command.command,
});

export default connect(mapStateToProps, null)(CommandNavigate);