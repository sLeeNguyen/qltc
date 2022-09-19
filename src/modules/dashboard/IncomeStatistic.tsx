import IncomeImg from 'public/images/income.png';
//
import chroma from 'chroma-js';
import Image from 'next/image';
import { ArrowUp as ArrowUpIcon } from 'react-feather';
import { Card, CardBody, CardTitleText } from 'src/components/card';
import { Text, TextSmall } from 'src/components/Text';
import { colors } from 'src/configs/theme';

export default function IncomeStatistic() {
  return (
    <Card css={{ height: '100%' }}>
      <CardBody>
        <div css={{ display: 'flex', flexDirection: 'row' }}>
          <div css={{ flexGrow: 1, marginRight: 8 }}>
            <CardTitleText css={{ marginBottom: 8 }}>Total income</CardTitleText>
            <Text css={{ color: colors.primary, fontSize: 20, fontWeight: 500, marginBottom: 28 }}>
              203,345,000 <TextSmall as="span">VND</TextSmall>
            </Text>
            <TextSmall css={{ marginBottom: 4 }}>This month</TextSmall>
            <Text css={{ fontWeight: 500, marginBottom: 4 }}>
              20,000,000 <TextSmall as="span">VND</TextSmall>
            </Text>
            <TextSmall>
              <TextSmall as="span" color={colors.primary}>
                <ArrowUpIcon size={16} strokeWidth={1.5} css={{ verticalAlign: 'bottom' }} /> 8,04%
              </TextSmall>
              &nbsp;
              <TextSmall as="span">last month</TextSmall>
            </TextSmall>
          </div>
          <div>
            <div
              css={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: chroma(colors.primary).alpha(0.25).hex(),
                borderRadius: '50%',
                marginLeft: 'auto',
              }}
            >
              <Image src={IncomeImg.src} blurDataURL={IncomeImg.blurDataURL} width={40} height={40} alt="income" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}