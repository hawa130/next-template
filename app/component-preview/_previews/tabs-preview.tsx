import { ComponentProps, useState } from 'react'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

type FormProps = Partial<ComponentProps<typeof TabsList>>

export const TabsPreview = () => {
  const [props, setProps] = useState<FormProps>({
    variant: 'default',
  })

  const form = (
    <ComponentConfigForm<FormProps>
      items={[
        {
          name: 'variant',
          type: 'radio',
          options: ['default', 'line', 'button'],
          defaultValue: 'default',
        },
      ]}
      onChange={setProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Tabs</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 mb-2" {...props}>
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="card-header">
              <h2 className="card-title">Welcome back</h2>
              <p className="card-description">Log in to your account</p>
            </div>
            <div className="card-body">
              <div className="space-y-1">
                <Label htmlFor="login-username" defaultValue="hawa130">Username</Label>
                <Input id="login-username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="login-password" defaultValue="hawa130">Password</Label>
                <Input id="login-password" type="password" />
              </div>
            </div>
            <div className="card-footer">
              <Button variant="filled" color="primary">Log in</Button>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="card-header">
              <h2 className="card-title">Create an account</h2>
              <p className="card-description">Start your journey with us</p>
            </div>
            <div className="card-body">
              <div className="space-y-1">
                <Label htmlFor="signup-username">Username</Label>
                <Input id="signup-username" defaultValue="hawa130" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" defaultValue="hawa130" />
              </div>
              <div className="py-1 flex items-center space-x-2">
                <Checkbox id="signup-terms" />
                <Label htmlFor="signup-terms">Accept terms and conditions</Label>
              </div>
            </div>
            <div className="card-footer">
              <Button variant="filled" color="primary">Sign up</Button>
            </div>
          </TabsContent>
        </Tabs>
      </ComponentPreviewCard>
    </section>
  )
}