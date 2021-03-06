import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { Stack } from '@chakra-ui/react'
import { NavLink } from '../Sidebar/NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {

    return (
        <Stack spacing="12" align="flex-start">

            <NavSection title="GERAL">

                <NavLink href="/dashboard" icon={RiDashboardLine}> Dashboard </NavLink>

                <NavLink href="/users" icon={RiContactsLine}> Users </NavLink>

            </NavSection>


            <NavSection title="AUTOMAÇÃO">

                <NavLink href="/forms" icon={RiInputMethodLine}> Formulários </NavLink>

                <NavLink href="/forms" icon={RiGitMergeLine}> Automação </NavLink>

            </NavSection>

        </Stack>

    );
}