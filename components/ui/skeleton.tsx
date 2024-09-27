import { Fragment, HTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { repeat } from '@/lib/utils/repeat'

function Skeleton({
	className,
	asChild,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	asChild?: boolean
}) {
	const Comp = asChild ? Slot : 'div'

	return (
		<Comp
			className={cn('animate-pulse rounded-md bg-muted-fg/15', className)}
			{...props}
		/>
	)
}

/**
 * 文本骨架
 * @param chars em数，默认值为8，如果为`false`则不设置宽度
 * @param full 是否占满整行宽度
 */
type TextSkeletonProps = ({ chars?: number | false; full?: false } | { full: true; chars?: never }) &
	HTMLAttributes<HTMLSpanElement>
export function TextSkeleton({ className, chars, full, style, ...props }: TextSkeletonProps) {
	const mergedStyle = { ...style }
	if (!full && chars !== false) {
		mergedStyle.width ??= `${chars ?? 8}em`
	}

	return (
		// 最外层元素用于提供正确的行高
		// 内层用于提供灰块视觉的高度
		<span>
			<Skeleton
				className={cn(
					'-my-[.1em] inline-block max-w-full leading-[1.2] after:invisible after:content-["永"]',
					full && 'w-full',
					className,
				)}
				style={mergedStyle}
				asChild
				{...props}
			>
				<span />
			</Skeleton>
		</span>
	)
}

/**
 * 多行文本骨架
 * @param lines 行数，默认值为3
 */
export function LinesSkeleton({ lines = 3 }: { lines?: number }): ReactNode {
	return [
		...repeat(lines - 1, (i) => (
			<Fragment key={i}>
				<TextSkeleton full />
				<br className="select-none" />
			</Fragment>
		)),
		<TextSkeleton key={lines} chars={false} className="w-2/3" />,
	]
}
