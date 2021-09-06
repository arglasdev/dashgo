import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic, { noSSR } from 'next/dynamic'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-18T13:45:00.000Z',
            '2021-03-19T13:45:00.000Z',
            '2021-03-20T13:45:00.000Z',
            '2021-03-21T13:45:00.000Z',
            '2021-03-22T13:45:00.000Z',
            '2021-03-23T13:45:00.000Z',
            '2021-03-24T13:45:00.000Z'
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    {
        name: 'series1', data: [1, 56, 78, 23, 51, 10, 109]
    }
];

export default function Dashboard() {

    return (

        // <Flex direction="column" h="100vh">
        <Box>

            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                        <Box padding={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                        <Box padding={["6", "8"]} bg="gray.800" borderRadius={8}>
                            <Text fontSize="lg" mb="4">Texto de abertura</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
            {/* </Flex> */}

        </Box>
    )
}