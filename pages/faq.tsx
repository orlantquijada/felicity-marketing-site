import * as Accordion from '@components/FAQ/Accordion'
import * as Tabs from '@components/FAQ/Tabs'

import { ReactElement, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { css } from '@config/stitches'

import { Text, Container, View } from '@components'

export default function FAQsPage() {
  const [currentTab, setCurrentTab] = useState(data[0].category)

  return (
    <Container size="large" css={{ py: '5vw' }}>
      <View css={{ mb: '$8' }}>
        <Text
          as="h1"
          size={{ '@initial': '8', '@tablet': '10' }}
          color="primary4"
          weight="bold"
          css={{ textAlign: 'center', mb: '$4' }}
        >
          Frequently Asked Questions
        </Text>
        {/* <Text
          as="p"
          weight="light"
          size={{ '@initial': '3', '@tablet': '4' }}
          css={{ textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          consequuntur totam cum minima, dolore dolorum omnis. Fugiat dolore
          architecto recusandae inventore minus odit a ullam. Vel odio iste
          reiciendis, repudiandae autem incidunt alias repellat odit ducimus,
          placeat dignissimos!
        </Text> */}
      </View>

      <View>
        <Tabs.Root
          defaultValue={data[0].category}
          orientation="horizontal"
          value={currentTab}
          onValueChange={(value) => setCurrentTab(value)}
        >
          <AnimateSharedLayout>
            <Tabs.List aria-label="Frequently Asked Questions">
              {data.map((tab) => (
                <Tabs.Trigger value={tab.category} key={tab.category}>
                  {currentTab === tab.category && (
                    <motion.div
                      layoutId="currentTab"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                      className={tabUnderline()}
                    />
                  )}

                  {tab.category}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </AnimateSharedLayout>
          {data.map((tab) => (
            <Tabs.Content value={tab.category} key={tab.category}>
              <Accordion.Root type="single" collapsible>
                {tab.questions.map((question, index) => (
                  <Accordion.Item value={question.label} key={index}>
                    <Accordion.Trigger>{question.label}</Accordion.Trigger>

                    <Accordion.Content>
                      {question.description}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </View>
    </Container>
  )
}

const tabUnderline = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 1,
  backgroundColor: '$primary4',
})

const data: Array<{
  category: string
  questions: Array<{
    label: string
    description: ReactElement
  }>
}> = [
  {
    category: 'Membership',
    questions: [
      {
        label: 'How to become a member?',
        description: (
          <>
            <p>Step 1: Sign up by filling in the Registration Form</p>
            <p>
              Step 2: Present a valid ID to verify your identity (3-day
              verification period)
            </p>
            <p> Step 3: Choose a subscription plan that suits you best</p>
            <p>
              Step 4: Get your free BDO card 3 days after request submission
              (only for Citizens and higher)
            </p>
            <p> Step 5: Enjoy your shopping</p>
          </>
        ),
      },
      {
        label: 'How can I earn from this system?',
        description: (
          <>
            <p>
              It’s easy! Simply share your delightful experience in Felicity and
              have other people experience the same way! Invite people to join
              Felicity and earn at most 10% in every member’s product purchase.
              Note that earnings can only be given to individuals who purchase
              Felicity products monthly. In this way, we can make sure that
              everyone lives happily and healthily.
            </p>
          </>
        ),
      },
      {
        label: 'Can I be a member even without recruiting?',
        description: (
          <>
            <p>
              Absolutely! The recruitment system exists to help people achieve
              their financial goals. If you don’t see the need to do such, then
              you’re still very welcome to be our member and shopper at any
              level.
            </p>
          </>
        ),
      },
      {
        label: 'What’s the best membership type for me?',
        description: (
          <>
            <p>
              Still not sure about what to do? Tourist matches those who only
              shop once in a blue moon. This is also perfect for students or
              even adults who do not have a regular plan in buying food
              groceries yet.
            </p>
            <p>
              Are you a young adult who is always on the go? Then, be a Citizen
              in Felicity! If you’re one who lives independently, having this
              subscription would help you jump start your grocery schedule set
              ups while helping you live a healthy life. The recruitment system
              this level holds also allows you to earn a little bit of extra
              cash – a perfect passive income source!
            </p>
            <p>
              Are you a parent who keeps things together in the household? Sign
              up as a Scout and enjoy the perks! May it be budgeting the money,
              spending more time with kids, being more productive, or managing
              time efficiently, Felicity is here to help you out. With our very
              affordable products and convenient shopping experience, being a
              parent becomes less stressful. What’s more, with this level’s
              broader recruitment range, you will be able to meet not just the
              needs but also the wants for your entire family.
            </p>
            <p>
              Do you identify yourself as a goal-getter or a breadwinner? Then,
              you are destined to be an Influencer! Its huge member base allows
              you to get the most of the system with the aim to help every
              household to lead a healthy lifestyle and transform society into a
              happy one. Share happiness every day and make your dreams come
              true all with Felicity.
            </p>
            <p>
              Do you run your own restaurant? Be our Partner then! It has a
              special system that allows your business to grow more by providing
              very affordable yet fresh product supply. What’s great about this
              is that this level allows you to enjoy the same privileges as that
              of an Influencer which makes you not just a boss but a super
              empowered boss. Which level suits you best? Start your journey
              with us now!
            </p>
          </>
        ),
      },
      {
        label: 'What can I get from being a member?',
        description: (
          <>
            <p>
              Felicity is full of perks that you’ll surely enjoy! We have fresh
              products that you can easily afford thanks to product and delivery
              coupons, so be sure to join our games and events to save more.
              Plus, you can even get a chance to have your food for FREE forever
              and achieve your financial goals! Aside from that, you’ll also get
              a free BDO card that you can use for your transactions and an
              insurance when you sign up as a Citizen, Scout, Influencer, or a
              Partner. These are just basic for Felicity and more great things
              may come. So, stick with us and help create a happy and healthy
              community!
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Purchase',
    questions: [
      {
        label: 'How and where can I buy the products?',
        description: (
          <>
            <p>
              Our app is still under construction and we’re doing our best to
              have it ready as soon as possible. For now, you can view our
              catalogue and purchase our products via our Facebook Page and
              Instagram “Felicity Fresh Foods”. Don’t forget to Like and Follow
              us there and give us a great review as well!
            </p>
          </>
        ),
      },
      {
        label: 'What are the payment options available?',
        description: (
          <>
            <p>
              We accept transactions done via Palawan, Gcash, BDO, and Cash On
              Delivery (COD)
            </p>
          </>
        ),
      },
      {
        label: 'Is the shop open 24/7?',
        description: (
          <>
            <p>
              Want to shop now? You can place your order at any day from 7:00am
              to 8:00pm in our Facebook Page and Instagram. Enjoy!
            </p>
          </>
        ),
      },
      {
        label: 'Is there a physical store where I can shop?',
        description: (
          <>
            <p>
              Felicity wants you to experience a hassle-free grocery time so
              instead of having a shop, we do all transactions online! All you
              have to do is scroll through our products via Facebook or
              Instagram (App is coming soon) and have your goods delivered at
              your home.
            </p>
          </>
        ),
      },
      {
        label: 'Is there a minimum purchase per transaction?',
        description: (
          <>
            <p>
              We want the best experience for you, and we understand that we get
              caught up in emergency situations from time to time. For this,
              Felicity does not set any minimum purchase for Tourists, Citizens,
              Scouts, and Influencers.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Delivery',
    questions: [
      {
        label: 'What are the delivery options available?',
        description: (
          <>
            <p>
              Scheduled Delivery – Depending on your location, you may decide
              when to have your orders delivered and plot them in the delivery
              calendar (note that we can only deliver within operating hours and
              4 hours after your order has been accepted).
            </p>
            <p>
              Regular Delivery – We deliver your order 4 hours after it has been
              accepted (depending on your location).
            </p>
            <p>
              Rush Delivery – We deliver your order 1 hour after it has been
              accepted (depending on your location).
            </p>
            <p>
              Pick Up – You may choose to get your order directly from our
              Felicity site 4 hours after it has been accepted.
            </p>
          </>
        ),
      },
      {
        label: 'Do you deliver nationwide?',
        description: (
          <>
            <p>
              For now, Felicity only operates within the cities of Cebu,
              Mandaue, Lapu-Lapu, Consolacion, and Talisay. As the family grows
              and more and more people would want to start living happily and
              healthily, we would broaden our service range so the whole
              Philippines can experience a dose of Fresh Happiness Every Day
              soon.
            </p>
          </>
        ),
      },
      {
        label: 'Do you deliver anytime and anywhere in the city?',
        description: (
          <>
            <p>
              For now, we only deliver items within our operating hours which is
              from 7:00am to 8:00pm every day.
            </p>
          </>
        ),
      },
      {
        label: 'How much is the delivery fee?',
        description: (
          <>
            <p>
              Felicity’s standard delivery rate is Php 50.00 only. However,
              there are many opportunities for you to win various delivery
              coupon rates so make sure to participate in our games and events
            </p>
          </>
        ),
      },
      {
        label: 'How can I check my order delivery status?',
        description: (
          <>
            <p>
              Once your order is placed, all there is left is to wait for the
              text message from our delivery men when they are already on the
              way to your location.
            </p>
          </>
        ),
      },
    ],
  },
]
